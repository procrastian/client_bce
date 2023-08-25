import "./style.css";

export default function CourseList() {

  let dataMouseDownAt = 0 
  let dataPrevPercentage = 0
  let dataPercentage 

  const track = document.getElementById("image-track");


  const handleMouseDown = (e) => {
    dataMouseDownAt = e.clientX;
  };
  
  const handleMouseUp = (e) => {
    dataMouseDownAt = "0";
    dataPrevPercentage = dataPercentage;
  };
  
  const handleMouseMove = (e) => {
    if (dataMouseDownAt === "0") return;
  
    const mouseDelta = parseFloat(dataMouseDownAt) - e.clientX,
      maxDelta = window.innerWidth / 2;
  
    const percentage = (mouseDelta / maxDelta) * -100,
      nextPercentageLimitless =
        parseFloat(dataPrevPercentage) + percentage,
      nextPercentage = Math.max(Math.min(nextPercentageLimitless, 0), -100);
  
    dataPercentage = nextPercentage;
  
    track.animate(
      {
        transform: `translate(${nextPercentage}%, -50%)`,
      },
      { duration: 1200, fill: "forwards" }
    );
  
    for (const image of track.getElementsByClassName("image")) {
      image.animate(
        {
          objectPosition: `${100 + nextPercentage}% center`,
        },
        { duration: 1200, fill: "forwards" }
      );
    }
  };
  
  window.onmousedown = (e) => handleMouseDown(e);
  window.ontouchstart = (e) => handleMouseDown(e.touches[0]);
  window.onmouseup = (e) => handleMouseUp(e);
  window.ontouchend = (e) => handleMouseUp(e.touches[0]);
  window.onmousemove = (e) => handleMouseMove(e);
  window.ontouchmove = (e) => handleMouseMove(e.touches[0]);
  

  return (
    <>
      <div className="card" id="course_list">
        <div id="image-track" data-mouse-down-at="0" data-prev-percentage="0">
          <img
            className="image"
            src="https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            draggable="false"
            alt="a course"
          />
          <img
            className="image"
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            draggable="false"
            alt="a course"
          />
          <img
            className="image"
            src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            draggable="false"
            alt="a course"
          />
          <img
            className="image"
            src="https://images.unsplash.com/photo-1689878211075-168d5358753d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            draggable="false"
            alt="a course"
          />
          <img
            className="image"
            src="https://images.unsplash.com/photo-1690148136337-2304c30b5420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            draggable="false"
            alt="a course"
          />
          <img
            className="image"
            src="https://images.unsplash.com/photo-1690177930780-6b3c800a2f57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            draggable="false"
            alt="a course"
          />
        </div>
      </div>
    </>
  );
}
