class ImageUploader {
    async upload(file) {
        const url = "https://api.cloudinary.com/v1_1/de4sa91zs/upload";
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'zqlxwmte')
            const res = await fetch(url, {
                method: "POST",
                body: formData
            })
            return await res.json()
        }
    }

export default ImageUploader