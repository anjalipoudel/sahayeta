'use client'
import { useState } from 'react'

export default function DonationForm() {
  const [selectedImage, setSelectedImage] = useState(null)

  const handleImageUpload = (event: any) => {
    const image = event.target.files[0]
    setSelectedImage(image)
  }

  const [formData, setFormData] = useState({
    selectedImage: null,
    name: '',
    address: '',
    email: '',
    phoneNumber: '',
    donationType: '',
    donationAmount: '',
    donorsNotes: ''
  })
  const handleChange = (event: any) => {
    fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: 'someone.',
        userId: 5
      })
    })
      .then(res => res.json())
      .then(console.log)
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: 'someone.',
        userId: 5
      })
    })
      .then(res => res.json())
      .then(console.log)
  }

  return (
    <div className="mx-auto mt-10 max-w-md rounded border bg-white p-6 shadow-lg">
      <h2 className="mb-4 text-xl font-bold">Title of the Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="imageUpload"
          >
            Upload Image
          </label>
          <input
            type="file"
            accept="image/*"
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
            id="imageUpload"
            onChange={handleImageUpload}
          />
          {selectedImage && (
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Selected"
              className="mt-2"
            />
          )}
        </div>
        <div className="flex gap-8">
          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Name
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
              type="text"
              placeholder="Enter your Fullname"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Address
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
              type="text"
              placeholder="Enter  Address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>{' '}
        </div>
        <div className="flex gap-8">
          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Email
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
              type="text"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>{' '}
          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Phone Number
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
              type="text"
              placeholder="Enter Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="mb-2 block text-sm font-bold text-gray-700">
            Type of Donation
          </label>
          <div>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio h-5 w-5 text-blue-600"
                name="donationType"
                value="money"
              />
              <span className="ml-2">Money</span>
            </label>
            <label className="ml-6 inline-flex items-center">
              <input
                type="radio"
                className="form-radio h-5 w-5 text-blue-600"
                name="donationType"
                value="goods"
              />
              <span className="ml-2">Goods</span>
            </label>
            <label className="ml-6 inline-flex items-center">
              <input
                type="radio"
                className="form-radio h-5 w-5 text-blue-600"
                name="donationType"
                value="services"
              />
              <span className="ml-2">Services</span>
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label className="mb-2 block text-sm font-bold text-gray-700">
            Donation Amount (Rs.)
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
            type="text"
            placeholder="Enter amount"
            value={formData.donationAmount}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="amount"
          >
            Doners notes
          </label>
          <textarea
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
            placeholder="Notes...."
            value={formData.donorsNotes}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-end gap-3">
          <button
            className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
            type="submit"
          >
            Submit
          </button>
          <button
            className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
            type="button"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

// function PostDataComponent() {
//     const [title, setTitle] = useState('');
//     const [userId, setUserId] = useState('');
//     // Add state for other data properties if needed

//     const handleTitleChange = (event: any) => {
//         setTitle(event.target.value);
//     };

//     const handleUserIdChange = (event: any) => {
//         setUserId(event.target.value);
//     };

//     // Add handlers for other data properties if needed

//     const postData = () => {
//         const url = 'https://jsonplaceholder.typicode.com/posts';

//         fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 title: title,
//                 userId: userId,
//                 /* include other data dynamically */
//             }),
//         })
//             .then((res) => res.json())
//             .then(console.log)
//             .catch((error) => console.error('Error:', error));
//     };

//     return (
//         <div>
//             <label>
//                 Title:
//                 <input type="text" value={title} onChange={handleTitleChange} />
//             </label>
//             <br />
//             <label>
//                 User ID:
//                 <input type="text" value={userId} onChange={handleUserIdChange} />
//             </label>
//             {/* Add input fields for other data properties if needed */}
//             <br />
//             <button onClick={postData}>Post Data</button>
//         </div>
//     );
// }

// export default PostDataComponent;
