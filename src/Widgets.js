import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Widgets = () => {
    const NewArticle = ( heading, subtitle ) => (
    <div className='widget_article flex p-2.5 cursor-pointer  hover:bg-gray-300 '>
        <div className='wLeft mr-1 text-blue-800'>
            <FiberManualRecordIcon/>
        </div>

        <div className='wRight'>
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>

    </div>
)


  return (
    <div className='widgets sticky top-20 bg-white p-4 rounded-md border border-orange-800  h-fit 	' >
        <div className='widget_header flex items-center justify-between p-2'>
            <h2 className='text-base font-normal'>Linkedin News</h2>
            <LanguageIcon/>
        </div>

        {NewArticle("Linkedin is now available in 10 languages", "Read more")}
        {NewArticle("Linkedin is now available in 10 languages", "Read more")}
        {NewArticle("Linkedin is now available in 10 languages", "Read more")}
        {NewArticle("Linkedin is now available in 10 languages", "Read more")}
        {NewArticle("Linkedin is now available in 10 languages", "Read more")}
        
    </div>
  )
}

export default Widgets