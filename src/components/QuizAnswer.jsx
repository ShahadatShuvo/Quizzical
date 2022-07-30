import { Button } from '@mui/material';
import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars';

function QuizAnswer({ setQuizPage }) {
    const arr = [1, 2, 3, 4, 5];
    return (
        <div className="relative z-30 h-full w-full flex justify-center items-center" >
            <Scrollbars style={{ maxWidth: "70vw", maxHeight: "80vh" }}>
                <div className='my-3'>
                    {arr.map((question, index) => <div key={index} className='text-primary'>
                        <h3 className='mt-2 text-lg font-bold tracking-wide'>Which best selling toy of 1983 caused hysteria, resulting in riots breaking in stores? </h3>
                        <div className='pt-3 pb-5 border-b border-primary-light'>
                            <span className="border border-[#D6DBF5] px-3 py-1 mr-3 rounded-full">Cabbage Patch Kids</span>
                            <span className="bg-[#D6DBF5] border border-[#D6DBF5] px-3 py-1 mx-3 rounded-full">Cumilla</span>
                            <span className="border border-[#D6DBF5] px-3 py-1 mx-3 rounded-full">Sylhet</span>
                            <span className="border border-[#D6DBF5] px-3 py-1 mx-3 rounded-full">Barishal</span>
                        </div>
                    </div>)}
                    <div className="mt-5 flex justify-center items-center">
                        <p className="text-xl font-bold text-primary mr-3">You Scored 3/5 correct answers</p>
                        <Button sx={{
                            bgcolor: "#4D5B9E", "&:hover": {
                                bgcolor: "#4D5B9E",
                            }
                        }}
                            variant="contained"
                            size="small"
                            onClick={() => setQuizPage("home")}>Play Again</Button></div>
                </div>
            </Scrollbars>
        </div>
    )
}

export default QuizAnswer