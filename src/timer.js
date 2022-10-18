import React from 'react';


function TimerComponet(){
	//time 기본 값 0
	const [time, setTime] = React.useState(0)
	console.log('Component 업데이트'); // time이 업데이트될 때마다 계속 호출됩니다.
    React.useEffect(function(){
        setTime(time+1);
    },[]); /*time을 넣으면 끝없이 출력됨*/
  return  (
		<div>
			<h3>{time}초</h3>
            <button>1초씩 올려주세요</button>
			{/* <button onClick={updateTime}>1씩 올려주세요</button>  */}
    </div>
	)/* 클릭할 때마다 setTime으로 state를 업데이트*/
}


export default TimerComponet;