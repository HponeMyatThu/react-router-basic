import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function About() {
  const [user, setUser] = useState('mgmg');

  if(!user){
    return <Navigate to='/' replace={true}/>
  }
  return (
    <>
      <h1>About Page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
        gravida ante, at molestie leo. Nunc ullamcorper nisl vitae lobortis
        iaculis. Aliquam erat volutpat. Nunc quis dolor id ligula molestie
        volutpat id in justo. Nulla dignissim fringilla ultricies. Quisque non
        posuere dui, vel commodo elit. Nulla vel massa lacus. Vivamus arcu
        lorem, gravida quis imperdiet quis, dapibus sed neque. Donec mauris
        lorem, imperdiet nec pharetra a, elementum non ex. Donec pulvinar nisi
        ac commodo consectetur. Mauris rhoncus pulvinar ex a lobortis. Morbi
        posuere mollis risus at sodales. Nulla ac vestibulum libero, in dictum
        ipsum. Pellentesque commodo est nec nisi sollicitudin, eget imperdiet
        magna iaculis. Vivamus lacinia neque et velit feugiat, sagittis dictum
        enim efficitur. Phasellus tempus ipsum congue metus faucibus, vel
        vestibulum augue cursus. Etiam dictum quam mi, id cursus magna
        scelerisque at. Aenean non enim ut quam tristique porta. Donec aliquet
        condimentum enim quis semper. Maecenas dictum sapien vitae est ultricies
        bibendum. Nulla quis dolor ut tellus efficitur sagittis sit amet vel
        libero. Aenean at enim tellus. Aliquam hendrerit risus sed vestibulum
        euismod. Morbi congue, dui a rutrum dapibus, sapien quam cursus mauris,
        sed cursus ex sapien sed tortor. Phasellus vulputate neque ac felis
        imperdiet tincidunt. Integer ac pretium nunc. Quisque ullamcorper
        gravida nunc, iaculis congue elit rutrum non. Sed at dui quis ex
        volutpat tempor et ut arcu. Sed ornare finibus lectus, nec egestas dui
        vehicula nec. Ut sagittis ullamcorper velit quis tincidunt. Morbi auctor
        dapibus leo sed imperdiet. Aliquam sit amet ornare lorem. Etiam magna
        arcu, rhoncus vel commodo sit amet, laoreet vel felis. Donec justo est,
        mollis vel euismod vel, rhoncus quis risus. Ut in quam tortor.
        Pellentesque nec leo dignissim, interdum nulla lacinia, pharetra sem. Ut
        vitae velit et dui tincidunt dignissim. Cras vehicula vitae ex posuere
        lobortis. Morbi egestas ullamcorper posuere. Donec nec tristique ex.
        Donec iaculis tempus suscipit. Nullam placerat malesuada nunc at
        posuere. Vestibulum dignissim eget nibh in pretium. Vivamus pellentesque
        leo vitae ipsum dignissim vestibulum. Praesent cursus tempus sodales.
        Etiam sagittis, neque at aliquam posuere, purus leo volutpat nunc, et
        faucibus turpis ex at odio. Proin ut pharetra magna, in consequat odio.
        Nunc in nisl pretium, vehicula libero sed, facilisis sapien.
        Pellentesque ac odio at turpis porta efficitur. Nam id pretium leo. Cras
        malesuada libero id condimentum fermentum. Suspendisse mi nibh, commodo
        et suscipit sed, semper non velit. Nam in euismod dui. In ac sem
        lacinia, condimentum justo a, dapibus eros. Praesent venenatis lorem eu
        massa bibendum, blandit facilisis nunc tincidunt.
      </p>
      <button onClick={() => setUser(null)}>Logout</button>
    </>
  );
}
