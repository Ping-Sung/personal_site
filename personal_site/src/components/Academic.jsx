/* eslint-disable react/no-unescaped-entities */
// import React from "react";
import '../css/academic.css'
import "react-image-gallery/styles/css/image-gallery.css";

import ImageGallery from 'react-image-gallery';
import { ShangdaImages } from '../ShangdaImages';

export default function Academic() {

    const publications_list = {
        2020: [
            {
                img: null,
                title: "Stress Level Classifier: Taiwanese College Table Tennis Athletes’ Electroencephalography Analysis Based on Decision Trees",
                abstact: "This study aims to provide a method to quantify the stress level with numerical EEG values, identify key features of brainwave and assess the level of stress for table tennis players. The data of College's Division 1 and Division 2 are collected and analyzed by the decision tree algorithms C4.5, CART, Random Forest and Random Tree. The result of Random Forest obtains the highest accuracy rate among each algorithm, which is 79.21% in all players, 79.3% in Division 1, and 80.68% in Division 2. According to the result of decision trees, the top attribute of the Division 1 players was Theta wave, which was different from the result of other data in the Division 2 players. Also reveal the deference of brainwaves between the Division 2 players and the Division 1 players while they are in high stressed competitions.",
                url: "https://ieeexplore.ieee.org/document/9302655",
                github: null,
                authors: "Cheng, P. S., Tsai, M. H., Hsueh, C. H., & Wu, S. K.",
                publisher: "In 2020 International Conference on Pervasive Artificial Intelligence (ICPAI) (2020, December)",
                gallary: [],
            },
            {
                img: null,
                title: "A Variant Model of TGAN for Music Generation",
                abstact: "In the past five years, we have seen an increase in generative adversarial networks (GANs) and their applications for image generation. Due to the randomness and unpredictability of the structure of music, music generation is well suited to the use of GANs. Numerous studies have been published on music generation by using temporal GANs. However, few studies have focused on the relationships between melodies and chords, and the effects of latent space on time sequence.\
                        We also propose a new method to implement latent structure on GANs for music generation.The main innovation of the proposed model is the use of new discriminator to recognize the time sequence of music and use of a pretrained beat generator to improve the quality of patterned melodies and chords.Results indicated that the pretrained model improved the quality of generated music.",
                url: "https://dl.acm.org/doi/abs/10.1145/3399871.3399888",
                github: null,
                authors: "Cheng, P. S., Lai, C. Y., Chang, C. C., Chiou, S. F., & Yang, Y. C.",
                publisher: "In Proceedings of the 2020 Asia Service Sciences and Software Engineering Conference (2020, May)",
                gallary: ShangdaImages,
            },

        ],
        2022: [
            {
                img: null,
                title: "Semantic Segmentation and Model Acceleration for Guardrail Detection in Construction Sites",
                abstact: "This study aims to adopt different models and apply various model compression and acceleration techniques to improve the performance of segmentation and computing efficiency of the semantic segmentation models for small objects such as safety guardrails, so as to help the monitoring personnel to judge whether the safety guardrails are set correctly, and reduce the accident rate in construction sites. Due to the scarcity of data caused by the restrictions of construction site safety regulations and the difficulty of data labeling, this study adopts the method of data augmentation to assist the training process of the model. In addition, in response to the model with hardware performance and huge amount of model parameters, it is found that using input images of different sizes for different models can ensure its segmentation performance and successfully perform guardrail identification according to the experiments. As a result, all models achieve above 0.54 in IoU. In this study, Ghost Module is chosen as the acceleration method, and experiments have confirmed that this acceleration method can help improve the computing efficiency, and can make the performance of segmentation of the model up to an IoU of 0.65. Although running on edge devices cannot achieve the level of real-time segmentation, after model acceleration, the time required for an image is still significantly decreased by more than 110 percent. And since the guardrail is a static object, there is no need for the fast identification frequency. Finally, in order to further reduce the computational complexity of the model, this study uses model pruning to compress the overall model size. According to the results of experiments, it is found that there is indeed a problem of redundant weights in the model. After discarding a certain degree of redundant weights by L1 norm and adopting fine-tuning, it can effectively improve the model's ability to segment guardrails.",
                url: "https://hdl.handle.net/11296/7d56rx",
                github: null,
                authors: "Lai, C. Y.",
                publisher: "Dissertation in Graduate Institute of Management Information Systems at National Chung Hsing University, Taichung City. (2022, July)",
                gallary: [],
            },
            {
                img: null,
                title: "Predicting Deep Regulation-level for miRNA-disease Associations Model with GNN and GRU",
                abstact: "MiRNAs (miRNAs) are types of endogenous RNAs with a length of 18 to 24 nucleic acids. Many studies show that miRNAs involved in the pathways of various cancers and diseases. Therefore, the identification of miRNA-disease correlations is one of the most important goals in the current biomedical field. However, although using traditional bio-experimental methods have high precision, but the whole bio-experiment process is complex and time-consuming. Therefore, predicting and ranking potential miRNA-disease associations is crucial for carrying out the high precision traditional bio-experiments.\
                In this study, the data of miRNA-disease associations obtained by biologists using traditional bio-experiments were used to defined two different kinds of labels: weight definition and majority definition. After series of data preprocessing, this study proposes predicting deep regulation-level for miRNA-disease associations model with GNN and GRU that classified the associations into “Up regular”, “Non-specific” and “Down regular”, which can adjuste to regression analysis and multi-class classification according to needs. Furthermore, all the experiments in the study show that the area under the receiver operating characteristic curve(AUC) have reached 0.8, which result showed that our method is significantly efficient. Among the experiments, the AUC of the 'Circulation' dataset can even surpass 0.9.\
                In conclusion, this study uses two innovative label preprocessing methods to define the relationship between miRNAs and diseases, which improved the problem that most similar studies in the past can only identidied whether the miRNA-disease associations is up regular or not. And based on the new label definition, a deep prediction model is proposed to refine the research of predicting potential associations between disease and miRNAs via machine learning based method. The result of this study can help speeding up the validation processes of miRNA-disease pairs for further bio-experiments as well as reducing the manpower and time consumption of bio-experiments.\
                ",
                url: "https://hdl.handle.net/11296/9tk8d7",
                github: null,
                authors: "Cheng, P. S.",
                publisher: "Dissertation in Graduate Institute of Management Information Systems at National Chung Hsing University, Taichung City. (2022, July)",
                gallary: [],
            },
            {
                img: null,
                title: "Detect Safety Net on the Construction Site Based on YOLO-v4",
                abstact: "Aiming at the safety net, which is a key device in fall prevention mechanism on the construction site, this study uses YOLO-v4 to train and detect to confirm the proper installation of the device; adopts 2 data increment methods and 3 image processing methods to enhance the accuracy on deep learning model training and detection; also compares the 3 image processing methods, to obtain that the contrast-limited adaptive histogram equalization processing is more suitable for the results of this study, which can more effectively judge that whether or not install the safety devices, hoping to effectively improve the environment safety of operators on the construction site.",
                url: "https://link.springer.com/chapter/10.1007/978-981-16-4258-6_5",
                github: null,
                authors: "Tzou, T. L., Huang, C. H., Lai, Y. H., Tsai, M. H., Hsu, C. T., Cheng, P. S., & Lee, W. J.",
                publisher: "In Innovative Computing: Proceedings of the 4th International Conference on Innovative Computing (IC 2021) (2022, January)",
                gallary: [],
            },
        ],
    }
    return (
        <div className="academic">
            <h1 className='academic-title'>Here are my academic publications</h1>
            <div className='publications'>
                <div className='publication-by-year'>
                    <div className="publication-year">
                        <h2>2022</h2>
                    </div>
                    {
                        publications_list[2022].map((publication, index) => (
                            <div className="publication" key={index}>

                                <div className="publication-content">
                                    <h2 className="publication-title">{publication.title}</h2>
                                    <p className="publication-authors">{publication.authors}</p>
                                    <p className="publication-publisher">{publication.publisher}</p>
                                    <p className="publication-abstrat">{publication.abstact}</p>
                                    <div className="publication-links">

                                        <button className="publication-links-btn" onClick={() => (window.open(publication.url, '_blank'))}>arixv</button>
                                        {publication.github && <button className="publication-links-btn" onClick={() => (window.open(publication.github, '_blank'))}>github</button>}
                                    </div>
                                </div>
                                {publication.gallary.length > 0 &&
                                    <div className="publication-image">
                                        <ImageGallery items={publication.gallary}
                                            showThumbnails={false}
                                            showBullets={true}
                                            showIndex={true}
                                        />
                                    </div>
                                }
                            </div>
                        ))
                    }

                </div>
                <div className='publication-by-year'>
                    <div className="publication-year">
                        <h2>2020</h2>
                    </div>
                    {
                        publications_list[2020].map((publication, index) => (
                            <div className="publication" key={index}>

                                <div className="publication-content">
                                    <h2 className="publication-title">{publication.title}</h2>
                                    <p className="publication-authors">{publication.authors}</p>
                                    <p className="publication-publisher">{publication.publisher}</p>
                                    <p className="publication-abstrat">{publication.abstact}</p>
                                    <div className="publication-links">

                                        <button className="publication-links-btn" onClick={() => (window.open(publication.url, '_blank'))}>arixv</button>
                                        {publication.github && <button className="publication-links-btn" onClick={() => (window.open(publication.github, '_blank'))}>github</button>}
                                    </div>
                                </div>
                                {publication.gallary.length > 0 &&
                                    <div className="publication-image">
                                        <ImageGallery items={publication.gallary}
                                            showThumbnails={false}
                                            showBullets={true}
                                            showIndex={true}
                                        />
                                    </div>
                                }
                            </div>
                        ))
                    }

                </div>
            </div>


        </div>
    )
}