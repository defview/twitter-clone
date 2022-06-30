import React, { useEffect, useState } from 'react'
import { RefreshIcon, SparklesIcon } from '@heroicons/react/outline'
import Input from './Input'
import { db } from '../firebase';
import { collection, onSnapshot, orderBy, query } from '@firebase/firestore';
import Post from './Post';

function Feed() {
  const [posts, setPosts] = useState([]);

  // MESSY
  // useEffect(() => {
  //   const unsubscribe = onSnapshot(
  //     query(collection(db, "posts"), orderBy("timestamp", "desc")),
  //     (snapshot) => {
  //       setPosts(snapshot.docs);
  //     }
  //   );

  //   return () => {
  //     unsubscribe();
  //   };
  // }, [db]);

  // CLEAN
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );

  return (
    <div className='text-white flex-grow border-l border-r border-gray-500
    max-w-2xl sm:ml-[73px] xl:ml-[370px]'>
        <div className='text-[#d9d9d9] flex items-center sm:justify-between py-2
        px-3 sticky top-0 z-50 bg-black border-b border-gray-500'>
            <h2 className='text-lg font-bold sm:text-xl'>Home</h2>
            <div className='flex flex-row space-x-2'>
            <SparklesIcon className='h-5 w-5 cursor-pointer text-white hover:bg-[#d9d9d9] hover:bg-opacity-10 
            rounded-full transition duration-200 ease-out hover:border border-transparent' />
            <RefreshIcon className='h-5 w-5 cursor-pointer transition-all duration-500 ease-out
            hover:rotate-180 active:scale-125 hover:bg-[#d9d9d9] hover:bg-opacity-10 
            rounded-full text-white hover:border border-transparent' />
            </div> 
        </div>
        <Input />
        <div className='pb-71'>
          {posts.map(post => (
            <Post key={post.id} id={post.id} post={post.data()} />
          ))}
        </div>
    </div>
  )
}

export default Feed