import Head from 'next/head';
import Button from '../components/button';
import heroBlockStyles from '../styles/heroBlock.module.css'
import BackgroundVideo from '../components/backgroundVideo';

export default function Home() {
  return (
    <div>
      <Head>
        <title>BoxelXR — VR Voxel Editor.</title>
      </Head>

      <BackgroundVideo videoSource="videos/demo.mp4" />

      <div className={heroBlockStyles.block}>
        <div className={heroBlockStyles.container}>
          <div className={heroBlockStyles.leftPart}>
            <h1 className={heroBlockStyles.title}>BoxelXR is the most intuitive way to create voxel graphics</h1>
            <p className={heroBlockStyles.body}>BoxelXR is a VR voxel editor that allows you to create voxel graphics in a way that feels natural. It's a great tool for creating 3D models for games, animations, and more.</p>
            <Button name="Join Waiting List" link="https://forms.gle/XUmwZ1bKSfrobKsa6" />
          </div>
          <div className={heroBlockStyles.gallery}></div>
          <div className={heroBlockStyles.video}>
          </div>
        </div>
      </div>
      
    </div>
  )
}
