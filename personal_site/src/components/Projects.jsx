// import React from 'react'
import '../css/projects.css'
import "react-image-gallery/styles/css/image-gallery.css";
// import ImageGallery from 'react-image-gallery';
import { ShangdaImages } from '../ShangdaImages';
import { WaninImages } from '../WaninImages';



function Projects() {
  const projects = [
    {
      title: 'Manufacturing Information Management System',
      subtitle: 'ShangDa Plastic Inc.',
      year: '2020-2021',
      // use \n to break line
      description: '• Developed a Manufacturing Information Management System, enabling end-to-end digital\
        management of customer information, raw material procurement, and inventory control processes.\
        \n • Implemented an Model - view - controller(MVC) pattern using the PHP Laravel framework and was\
        responsible for back - end development.',
      gallary: ShangdaImages,
      urls: [
        { title: 'Link', url: 'https://www.shangda.com.tw/' },
      ]
    },
    {
      title: 'Book Donation Management System Platform and Official Website',
      subtitle: 'Wanin International',
      year: '2020',
      description: '• Implemented MVC pattern backend and RESTful APIs by using PHP Laravel Framework.\
        \n • Designed the UI of the official website and developed customized responsive frontend with jQuery and Bootstrap.\
        ',
      gallary: WaninImages,
      urls: [
        { title: 'Github', url: 'https://github.com/jamie870116/waninlibary' },
      ]
    },
  ]


  return (
    <div className=''>
      <div className="home-title">
        <h3>Project</h3>
      </div>
      <div className='project-list'>

        {
          projects.map((project, index) => (
            <div className='project' key={index}>
              <div className='project-head'>

                <h5>{project.title}</h5>
                <p style={{ fontSize: 14 }}>{project.year}</p>
              </div>
              <div className='project-info'>
                <div className='project-description'>
                  {project.description.split('\n').map((line, index) => (<p key={index}>{line}</p>))}
                </div>
                {/* {
                  project.gallary.length > 0 &&
                  <div className='project-gallary'>
                    <ImageGallery items={project.gallary}
                      showThumbnails={false}
                      showBullets={true}
                      showIndex={true}
                    />
                  </div>
                } */}
                {
                  project.urls.length > 0 &&
                  (
                    <div className='project-links'>
                      {project.urls.map((url, index) => (
                        <button key={index} className='project-links-btn' onClick={() => (window.open(url.url, '_blank'))}>{url.title}</button>
                      ))}
                    </div>
                  )
                }
              </div>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default Projects

// {
//   projects.map((project, index) => {
//     <div className='project' key={index}>
//       <h1>project1</h1>
//       <div className='project-head'>
//         <h2>{project.title}</h2>
//         <p>{project.year}</p>
//       </div>
//       <div className='project-info'>
//         <div className='project-description'>
//           <p>{project.description}</p>
//         </div>
//         {
//           project.gallary.length > 0 &&
//           <div className='project-gallary'>
//             {project.gallary.map((image, index) => {
//               <img src={image} alt={project.title} key={index} />
//             })}
//           </div>
//         }
//         {
//           project.urls.length > 0 &&
//           <div className='project-links'>
//             {project.urls.map((url, index) => {
//               <button key={index} className='project-links-btn' onClick={() => (window.open(url.url, '_blank'))}>{url.title}</button>
//             })}
//           </div>
//         }

//       </div>
//     </div>

//   })
// }
