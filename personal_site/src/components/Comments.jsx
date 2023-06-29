import Giscus from '@giscus/react';

import { giscusConfigs } from '../GiscusConfigs';   
import '../css/comments.css'

export default function Comments() {

    return (
        <div className='comments'>
            <Giscus
                repo={giscusConfigs.repo}
                repoId={giscusConfigs.repoId}
                category={giscusConfigs.category}
                categoryId={giscusConfigs.categoryId}
                mapping="pathname"
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="top"
                theme='light_tritanopia'
                loading="lazy"
            />
        </div>
    )
}

// <script src="https://giscus.app/client.js"
//         data-repo="jamie870116/personal_site"
//         data-repo-id="R_kgDOJzIS9w"
//         data-category="Announcements"
//         data-category-id="DIC_kwDOJzIS984CXjSd"
//         data-mapping="pathname"
//         data-strict="0"
//         data-reactions-enabled="1"
//         data-emit-metadata="0"
//         data-input-position="bottom"
//         data-theme="light_tritanopia"
//         data-lang="zh-TW"
//         crossorigin="anonymous"
//         async>
// </script>