"use strict";
import axios from 'axios';
import { client } from './sanityClient.js';  // Ensure this file exists and exports the client object
import slugify from 'slugify';

// Upload image to Sanity
async function uploadImageToSanity(imageUrl) {
    try {
        // Fetch the image from the URL and convert it to a buffer
        const response = await axios.get(imageUrl, { responseType: 'arraybuffer', timeout: 10000 });
        const buffer = Buffer.from(response.data);
        // Upload the image to Sanity
        const asset = await client.assets.upload('image', buffer, {
            filename: imageUrl.split('/').pop(), // Extract the filename from URL
        });
        console.log('Image uploaded successfully:', asset);
        return asset._id; // Return the uploaded image asset reference ID
    } catch (error) {
        console.error('❌ Failed to upload image:', imageUrl, error);
        return null;
    }
}

// Create or update a category in Sanity
async function createCategory(category, counter) {
    try {
        const categoryExist = await client.fetch(`*[_type=="category" && slug==$slug][0]`, { slug: category.slug });
        if (categoryExist) {
            return categoryExist._id;
        }
        const catObj = {
            _type: "category",
            _id: `${category.slug}-${counter}`,
            name: category.name,
            slug: category.slug
        };
        const response = await client.createOrReplace(catObj);
        console.log('Category created successfully:', response);
        return response._id;
    } catch (error) {
        console.error('❌ Failed to create category:', category.name, error);
        return null;
    }
}

// Main function to import data
async function importData() {
    try {
        // Fetch data from external API
        const response = await axios.get('https://hackathon-apis.vercel.app/api/products');
        const products = response.data;

        let counter = 1;
        // Iterate over the products
        for (const product of products) {
            let imageRef = null;
            let catRef = null;

            // Upload image and get asset reference if it exists
            if (product.image) {
                imageRef = await uploadImageToSanity(product.image);
            }

            // Create or find the category
            if (product.category.name) {
                catRef = await createCategory(product.category, counter);
            }

            const sanityProduct = {
                _id: `product-${counter}`,  // Prefix the ID to ensure validity
                _type: 'product',
                name: product.name,
                slug: {
                    _type: 'slug',
                    current: slugify(product.name || 'default-product', {
                        lower: true,
                        strict: true,
                    }),
                },
                price: product.price,
                category: catRef ? { _type: 'reference', _ref: catRef } : undefined,
                tags: product.tags || [],
                quantity: 50,
                image: imageRef ? {
                    _type: 'image',
                    asset: { _type: 'reference', _ref: imageRef }
                } : undefined,
                description: product.description || "A timeless design, with premium materials.",
                features: product.features || [
                    "Premium material",
                    "Handmade upholstery",
                    "Quality timeless classic",
                ],
                dimensions: product.dimensions || {
                    _type: 'dimensions',
                    height: "110cm",
                    width: "75cm",
                    depth: "50cm",
                },
            };

            // Log and upload the product to Sanity
            console.log('Uploading product:', sanityProduct);
            await client.createOrReplace(sanityProduct);
            console.log(`✅ Imported product: ${sanityProduct.name}`);

            counter++;
        }

        console.log('✅ Data import completed!');
    } catch (error) {
        console.error('❌ Error importing data:', error);
    }
}

// Run the import function
importData();
