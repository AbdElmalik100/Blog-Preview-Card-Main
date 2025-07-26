function App() {
  return (
    <main className='min-h-screen bg-Yellow grid place-items-center'>
      <div className="box p-6 bg-white w-[384px] max-lg:mx-4 max-lg:w-full shadow-[8px_8px_0px]  rounded-[20px] border border-black flex flex-col gap-3">
        <img className="rounded-[20px]" src="/images/illustration-article.svg" alt="Illustration Article" />
        <span className="badge rounded-sm mt-3 bg-Yellow text-black font-extrabold p-1 px-3 w-fit text-sm">Learning</span>
        <span className="font-medium">Published 21 Dec 2023</span>
        <h1 className="transition-all ease-out hover:text-Yellow cursor-pointer text-2xl font-extrabold">HTML & CSS foundations</h1>
        <p className="text-Gray-500 font-medium">These languages are the backbone of every website, defining structure, content, and presentation.</p>
        <div className="profile flex items-center gap-3 mt-4">
          <img className="rounded-full w-8" src="/images/image-avatar.webp" alt="Avatar" />
          <span className="font-extrabold">Greg Hooper</span>
        </div>
      </div>
    </main>
  )
}

export default App
