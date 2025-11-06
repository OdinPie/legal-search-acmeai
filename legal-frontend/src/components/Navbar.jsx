export default function Navbar() {

  const handleScroll = () =>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }
  
  return (
    <div className="flex justify-center fixed top-0 z-10 w-full">
        <div className="navbar bg-base-100 shadow-sm ">
    <div className="flex justify-evenly w-full">
        <a onClick={handleScroll} className="btn btn-ghost !text-xl !font-bold !text-[#4CAF50]">Legally</a>
    </div>
    </div>
    </div>
  );
}
