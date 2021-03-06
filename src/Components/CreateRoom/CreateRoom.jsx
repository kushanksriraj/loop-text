import { Button } from "..";
export const CreateRoom = () => {
  return (
    <div className="fixed bottom-8 flex justify-center w-full">
      {/* <Button 
        primary="bg-blue-500 text-white  rounded-full h-24 w-24 flex items-center justify-center"
        text="Create Room"
        hrefText="#create-room-modal"
      /> */}
      <a href="#create-room-modal">
        <button className="bg-blue-500 text-white  rounded-full h-16 w-16 flex items-center ">
          <span className="material-icons-round center self-center w-full text-5xl" title='create room'>add</span>
        </button>
      </a>
      {/* <Button
        primary="bg-blue-500 text-white w-2/5 lg:w-48 lg:rounded-md lg:mt-10 h-20 text-1xl outline-none focus:outline-none"
        text="Create Room"
      /> */}
    </div>
  );
};
