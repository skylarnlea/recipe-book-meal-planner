'use client'; //this tells Next.js that this is a Client component (must run on browser not server)

import { useState } from 'react'; //for tracking form inputs (controlled components)
import { useRouter } from 'next/navigation'; //lets us programmatically redirect after submitting the form

export default function NewRecipePage() {
    const router = useRouter();
    const [formData, setFormData] = useState({ //central form state - every input field updates this object
        title: '',
        ingredients: '',
        instructions: '',
        category: '',
        image: ''
    });

    const [error, setError] = useState<string | null>(null); //used to display a message if form submission fails

    //dynamic handler for all input fields
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); //prevents default browser reload and submits form via fetch

        const res = await fetch('/api/recipes', { //sends POST request to your upcoming API route and submits form data as JSON
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (res.ok) { //if it works, redirect to recipe list
            router.push('/recipes');
        } else { //if not, show error message
            const { message } = await res.json();
            setError(message || 'An unexpected error occurred');
        }
    };

    return (
        <div className="max-w-2xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Add New Recipe</h1>

            {error && <p className="text-red-500 mb-4">{error}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="title"
                    placeholder="Recipe Title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded"
                />
                <textarea
                    name="ingredients"
                    placeholder="Ingredients"
                    value={formData.ingredients}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded"
                />
                <textarea
                    name="instructions"
                    placeholder="Instructions"
                    value={formData.instructions}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded"
                />
                <input 
                    type="text"
                    name="category"
                    placeholder="Category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded"
                />
                <input
                    type="text"
                    name="image"
                    placeholder="/images/placeholder.jpg"
                    value={formData.image}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded"
                />

                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Add Recipe
                </button>
            </form>
        </div>
    );
}