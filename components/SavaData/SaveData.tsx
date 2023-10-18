import axios from 'axios';
import React, { useState } from 'react';
// builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export const createOrUpdateBuilderIOEntry = async (name: any, email: any) => {

    console.log(name)
    // try {
    //     const response = await axios.patch(`/api/test`, {
    //         email: email,
    //         name: name
    //     });
    //     return response.data;

    // }
    try {
        const response = await axios.delete(`/api/test`);
        return response.data;

    }
    catch (error) {
        console.error('Error while putting data in builder.io model : ', error);
        throw error;
    }
};

const SaveData = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [selectedImage, setSelectedImage] = useState<File | null>(null);

    // const allData = (await builder.getAll('shiv')).map((value) => {
    // return value
    // })

    const handleImageChange = (e: any) => {
        const files = e.target.files;

        if (files && files.length > 0) {
            const file = files[0];
            setSelectedImage(file);
        }
    };

    console.log("shivam ", selectedImage)
    const handleImageUpload = async () => {
        if (!selectedImage) return;

        try {
            const response = await axios.post('/api/image', {
                image: selectedImage,
            });
            console.log(response.data)
            return response.data
            // if (response.ok) {
            //     const data = await response.json();
            //     console.log('Image uploaded:', data);
            // } else {
            //     console.error('Failed to upload the image');
            // }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    const handlePost = async () => {
        try {
            const response = await axios.post(`/api/test`, {
                price: price,
                name: name,
                image: selectedImage
            });
            return response.data;

        }
        catch (error) {
            console.error('Error during Builder.io entry:', error);
        }
    };

    const handlePatch = async () => {
        try {
            const response = await axios.patch(`/api/test`, {
                price: price,
                name: name
            });
            return response.data;

        }
        catch (error) {
            console.error('Error during Builder.io entry:', error);
        }
    }

    const handlePut = async () => {
        try {
            const response = await axios.put(`/api/test`, {
                price: price,
                name: name
            });
            return response.data;

        }
        catch (error) {
            console.error('Error during Builder.io entry:', error);
        }
    }

    const handleDelete = async () => {
        try {
            const response = await axios.delete(`/api/test`);
            return response.data;
        }
        catch (error) {
            console.error('Error during Builder.io entry:', error);
        }
    }

    return (
        <>
            <div className='flex justify-center items-center'>
                <input
                    className='border'
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Name"
                />
                <input
                    className='border ml-2'
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Set Price"
                />
                <input type="file" accept="image/*" onChange={handleImageChange} />
            </div>
            <div className='flex items-center justify-center'>
                <button onClick={handlePost} className='bg-green-400 mt-4 justify-center ML-4'>POST</button>
                <button onClick={handlePatch} className='bg-cyan-500 mt-4 justify-center ml-4'>PATCH</button>
                <button onClick={handlePut} className='bg-cyan-400 mt-4 justify-center ml-4'>PUT</button>
                <button onClick={handleDelete} className='bg-red-500 mt-4 justify-center ml-4'>DELETE</button>
                <button onClick={handleImageUpload} className='bg-orange-600 mt-4 justify-center ml-4'>Upload Image</button>
            </div>
        </>
    );
};

export default SaveData;

