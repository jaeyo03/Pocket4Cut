import { useNavigate } from "react-router-dom";
import ShareLogo from "../../assets/images/share-logo.svg?react";
import Checked from "../../assets/images/checked.svg?react";
import styled from "styled-components";
import tw from "twin.macro";
import BackIcon from "../../assets/icons/back-icon.tsx";
import { useState } from "react";
import axios from "axios";

type Step3Props = {
  handleNextClick: () => void;
  handleBackStep: () => void;
  dateInfo: string;
  records:string;
  hashtags:string[];
  year:string;
  month:string;
  day:string;
}

function PhotoCheck3({ handleNextClick, handleBackStep, year, month, day, hashtags, records, dateInfo }: Step3Props) {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);
  
  const handleSavePicture = async () => {
    try {
      const response = await axios.post('http://pocket4cut.link/api/v1/album', {
        photoboothId: 0,
        year: {year},
        month: {month},
        date: {day},
        hashtag: {hashtags},
        memo: {records},
        filePath: "string"
      },{
          headers : {
            'Content-Type' : 'application/json'
          }
        }
      )
      alert(response.data);
    } catch (error : any) {
      // 여기 추후에 간소화 필요 2024.10.30
      if (error.response) {
        console.log("Data:", error.response.data);
        console.log("Status:", error.response.status);
        console.log("Headers:", error.response.headers);
        alert(`Server responded with status: ${error.response.status}`);
      } else if (error.request) {
        console.log("Request:", error.request);
        alert("No response received from the server.");
      } else {
        console.log("Error:", error.message);
        alert(`Error in setting up the request: ${error.message}`);
      }
    }
  };
  
  return (
    <Container>
      <Header>
        <div className="relative flex flex-row w-full justify-center items-center">
          <Title>사진 확인</Title>
          <button className="absolute left-[10px] top-[35%]" onClick={handleBackStep}>
            <BackIcon color="white" />
          </button>
        </div>
        <DateText>{dateInfo}</DateText>
      </Header>
      <ShareLogo className="mt-3"></ShareLogo>
      <div className="relative mt-6 justify-start items-center gap-2.5 inline-flex">
        <button className="w-6 h-6 bg-[#e9eaee] rounded-[3px]" onClick={() => setClicked((prev) => !prev)}>
          {clicked ? <Checked /> : null}
        </button>
        <div className="text-white text-lg font-normal font-['Pretendard']">해시태그, 사진 기록까지 공유하기</div>
      </div>
      <ButtonContainer
        onClick={() => {
          handleNextClick()
          handleSavePicture()
      }}>
        <div className="text-center text-white text-[22px] font-semibold font-['Pretendard']">다음</div>
      </ButtonContainer>
      <ButtonContainer2 className="mt-0" onClick={() => navigate("/home")}>
        <div className="text-center text-[#676f7b] text-[22px] font-semibold font-['Pretendard']">다음에 할게요</div>
      </ButtonContainer2>
    </Container>
  );
}

const Container = styled.div`
  ${tw`bg-gray600 flex flex-col w-full min-h-screen items-center`}
  overflow-x: hidden;
`;

const Header = styled.header`
  ${tw`relative w-full flex flex-col items-center justify-center mb-12 h-[80px] border-b-[1.5px] border-b-background`}
`;

const Title = styled.div`
  ${tw`text-[#FFFFFF] text-2xl font-semibold font-['Pretendard']`}
`;

const DateText = styled.div`
  ${tw`opacity-70 text-[#676f7b] text-xs font-medium font-['Pretendard'] mt-1`}
`;

const ButtonContainer = styled.button`
  ${tw`w-[280px] h-[62px] bg-[#5453ee] rounded-lg mt-8 flex justify-center items-center`}
`;

const ButtonContainer2 = styled.button`
  ${tw`w-[280px] h-[62px] bg-[#F9F9FB] rounded-lg mt-3 flex justify-center items-center`}
`;

export default PhotoCheck3;