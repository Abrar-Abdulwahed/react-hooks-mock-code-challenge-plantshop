import React, { useState } from 'react';
import { addPlant } from '../api/plants';
import { useMutation, useQueryClient } from 'react-query';

function NewPlantForm() {
	const initialState = {
		name: '',
		image: null,
		price: 0,
	};

	const [formData, setFormData] = useState(initialState);
  const queryClient = useQueryClient();
	const addPlantMutate = useMutation(addPlant, {
		onSuccess: () => {
			queryClient.invalidateQueries('plants');
		},
	});

	const handleChange = (e) => {
		setFormData((prev) => {
			return { ...prev, [e.target.name]: e.target.value };
		});
	};

	function handleSubmit(event) {
		event.preventDefault();
		addPlantMutate.mutate(formData);
		setFormData(initialState);
	}

	return (
		<div className="new-plant-form">
			<h2>New Plant</h2>
			<form onSubmit={handleSubmit}>
				<input type="text" name="name" placeholder="Plant name" value={formData.name} onChange={handleChange} />
				<input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} />
				<input type="number" name="price" step="0.01" placeholder="Price" value={formData.price} onChange={handleChange} />
				<button type="submit">Add Plant</button>
			</form>
		</div>
	);
}

export default NewPlantForm;
