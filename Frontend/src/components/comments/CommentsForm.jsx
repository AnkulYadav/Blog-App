import React,{useState} from 'react'

const CommentsForm = ({btnLabel , formSubmitHandler }) => {
    const [value, setValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        formSubmitHandler(value)
        setValue("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className='flex flex-col items-end border border-primary rounded-lg p-4'>
                <textarea
                    className='w-full h-24 p-4 border border-gray-300 rounded-md outline-none resize-none focus:outline-none'
                    placeholder='Leave Your Comment Here....' row='5'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button type='submit' className='px-6 py-2.5 rounded-lg bg-primary text-white font-semibold mt-2 '>{btnLabel}</button>
            </div>
        </form>
    )
}

export default CommentsForm
