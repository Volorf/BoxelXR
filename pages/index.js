import Head from 'next/head';
import Button from '../components/button';
import heroBlockStyles from '../styles/heroBlock.module.css'
import BackgroundVideo from '../components/backgroundVideo';

export default function Home() {
  return (
    <div>
      <Head>
        <title>BoxelXR — Simple Editor for Voxel Graphics.</title>
      </Head>

      <BackgroundVideo videoSource="demo.mp4" />

      <div className={heroBlockStyles.block}>
        <div className={heroBlockStyles.container}>
          <div className={heroBlockStyles.leftPart}>
            <div className={heroBlockStyles.textData}>
              <h1>BoxelXR is the most intuitive way to create voxel graphics</h1>
              <p>BoxelXR is a VR voxel editor that allows you to create voxel graphics in a way that feels natural. It's a great tool for creating 3D models for games, animations, and more.</p>
            </div>
           <Button name="Get the app" link="https://www.oculus.com/experiences/quest/5815420721867244/" />
          </div>
          <div className={heroBlockStyles.cover}></div>
        </div>
      </div>
      
    </div>
  )
}
