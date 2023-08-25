import React, { useState, useEffect } from 'react'
import { SurveyCreator, SurveyCreatorComponent } from "survey-creator-react"
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";
import { Button, Stack } from '@mui/material';

const creatorOptions = {
    isAutoSave: true
};

export default function FeedbackFormEditor({save}) {
    const creator = new SurveyCreator(creatorOptions);
    creator.saveSurveyFunc = (saveNo, callback) => { 
        // If you use localStorage:
        window.localStorage.setItem("survey-json", creator.text);
        callback(saveNo, true);
      };
    return (
        <div>
            <Stack width={'100%'} direction={'row'} justifyContent={'center'} >
                <Button variant='contained' onClick={()=>save()} >Save Form</Button>
            </Stack>
            <SurveyCreatorComponent creator={creator} />
        </div>
    )
}
