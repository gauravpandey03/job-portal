import React from 'react'
import Navbar from '../components_lite/Navbar'
import amreshsir from './amreshsir.jpg'; // Import the local image
import db from './db.jpg';
 import mm from './mm.jpg';
 import py from './py.jpg';

const Creator = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center w-full">
          {/* Image Section */}
          <div className="flex justify-center">
            <img src={amreshsir} alt="Profile" className="h-80 object-cover rounded-lg shadow-md" />
          </div>
          {/* Text Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Gaurav Pandey </h2>
            <h5 className="text-2xl font text-gray-800 mb-4">ER : 211B367 </h5>
  
<p className="text-gray-600 mb-2">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum sem et lacus tincidunt, a efficitur tellus interdum.
</p>
<p className="text-gray-600 mb-2">
  Nullam non felis vitae odio lacinia laoreet. In vel sapien nec nulla aliquet ultrices non id nulla.
</p>
<p className="text-gray-600 mb-2">
  Sed sit amet mi a justo malesuada sollicitudin. Integer porta, metus ac bibendum feugiat, odio eros rutrum ligula, sed pharetra nisi justo non quam.
</p>
<p className="text-gray-600">
  Cras interdum, nisl ac bibendum suscipit, sapien purus commodo purus, at iaculis nulla nunc a risus.
</p> 


          </div>
        </div>
      </div>

      <hr className="w-full border-gray-300 my-6" />

      <div className="text-center p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Team members </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Developer 1 */}
          <a href="#" target="_blank" rel="noopener noreferrer" className="block text-center">
            <img src={db} alt="Developer 1" className="mx-auto rounded-lg shadow-md" />
            <h3 className="text-lg font-semibold text-gray-700 mt-2">Dhruv Bhardwaj</h3>
            <p className="text-gray-600 text-sm">ER:211B366</p>
            <p className="text-gray-600 text-sm">Full Stack Developer</p>
          </a>
          {/* Developer 2 */}
          <a href="#" className="block text-center">
            <img src={mm} alt="Developer 2" className="mx-auto rounded-lg shadow-md" />
            <h3 className="text-lg font-semibold text-gray-700 mt-2">Mahipal Meena</h3>
            <p className="text-gray-600 text-sm">ER : 211B368</p>
            <p className="text-gray-600 text-sm">Full Stack Developer</p>
          </a>
          {/* Developer 3 */}
          <a href="#" className="block text-center">
            <img src={py} alt="Developer 3" className="mx-auto rounded-lg shadow-md" />
            <h3 className="text-lg font-semibold text-gray-700 mt-2">Prabal Yadav</h3>
            <p className="text-gray-600 text-sm">ER : 211B367</p>
            <p className="text-gray-600 text-sm">Full Stack Developer</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Creator
