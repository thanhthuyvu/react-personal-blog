import {useState, useEffect} from 'react';
import {projectStorage, projectFirestore, timestamp} from '../firebase/config';

const useStorage = (blog) => {
const [progress, setProgress] = useState(0);
const [error, setError] = useState(null);
const [blog, setBlog] = useState(null);

useEffect(() => {
//references
const storeRef = projectStorage.ref(blog.name);
const collectionRef = projectFirestore.collection('blogs');

storeRef.put(blog).on('state_changed', (snap)=> {
    let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
    setProgress(percentage);

}, (err)=> {
    setError(err);
}, async()=>{
    const url = await storeRef.getDownloadURL();
    const createdAt = timestamp();
        collectionRef.add({url, createdAt})
    setBlog(url);
})
},[blog]);

return { progress, url, error}

}

export default useStorage;

