// import React from 'react'
import '../css/projects.css'
import "react-image-gallery/styles/css/image-gallery.css";
// import ImageGallery from 'react-image-gallery';
import { ShangdaImages } from '../ShangdaImages';
import { WaninImages } from '../WaninImages';



function Projects() {
  const projects = [
    {
      title: 'Private, military service',
      subtitle: 'Republic of China (Taiwan) Armed Forces',

      year: 'Jan. 2023 – May. 2023',
      // use \n to break line
      description: '• Completed basic training and performed various duties, including guard duty and maintenance tasks.',
      gallary: [],
      urls: [
      ]
    },
    {
      title: 'Project Research Assistant',
      subtitle: 'National Chung Hsing Uni. & Occupational Safety and Health Administration, MOL',

      year: 'Feb. 2021 – Feb. 2022',
      // use \n to break line
      description: '• Implemented AI safety identification technology improvement plan for structural\
        steel construction sites using edge computing architecture.\
        \n• Participated in the deployment of edge computing system utilizing Jetson Nano.\
        \n• Trained AI models with Pytorch, including object detection and semantic segmentation models, \
        dangerous behaviour detection, and data annotation.\
        \n• Achieved a high F1 - score for both helmet detection(93.51 %) and hook detection(97 %) through the\
        use of object detection model.\
        \n• Completed 60 % of the documentation for this project and served as the presenter for mid - \
        term report.',
      gallary: [],
      urls: [
      ]
    },
    {
      title: 'Project Research Assistant',
      subtitle: 'National Chung Hsing Uni. & Taiwan Semiconductor Manufacturing Co., Ltd',
      year: 'Aug. 2021 – Dec. 2021',
      // use \n to break line
      description: '• Trained in deep learning models including object detection models, dangerous \
      behaviour detection and data annotation.\
      \n• Contributed to the project\'s success by designing and implementing accurate and efficient deep learning \
      models. The mean average precision of the object detection model achieved 99.77%, and the average IOU \
      reached 84.46%.',
      gallary: [],
      urls: [
      ]
    },
    {
      title: 'Backend Developer (Contract)',
      subtitle: 'ShangDa Plastic Inc.',
      year: 'Aug. 2020 – May. 2021',
      // use \n to break line
      description: '• Developed a Manufacturing Information Management System, enabling end-to-end digital\
        management of customer information, raw material procurement, and inventory control processes.\
        \n • Implemented an Model - view - controller(MVC) pattern using the PHP Laravel framework and was\
        responsible for backend development.',
      gallary: [],
      urls: [
      ]
    },
    {
      title: 'Backend Developer (Contract)',
      subtitle: 'Wanin International Inc.',
      year: 'Mar. 2020 – Dec. 2020',
      description: '• Led the development of the Book Donation Management System Platform and Image Website \
      Development project.\
      \n• Responsible for 50 % of the RESTful APIs design with PHP Laravel and database design with MySQL.\
      \n• Designed the lending and returning workflow of the library system.',
      gallary: WaninImages,
      urls: [
        { title: 'Github', url: 'https://github.com/jamie870116/waninlibary' },
      ]
    },



  ]


  function renderProject(projects) {
    const projectList = projects.map((project, index) => (
      <div className='project' key={index}>
        <div className='project-head'>
          <h5>{project.title}</h5>
          <p style={{ fontSize: 14 }}>{project.year}</p>
        </div>
        <p className='project-company'>{project.subtitle}</p>
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

    return (
      <div className='project-list'>
        {projectList}
      </div>
    )
  }


  return (
    <div className=''>
      <div className="home-title">
        <h3>Experience</h3>
      </div>
      <div className='project-list'>
        {renderProject(projects)}
      </div>
    </div>
  )
}

export default Projects