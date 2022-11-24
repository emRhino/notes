import React, { useState } from 'react';
import Dropdown from './Dropdown';

const Translate = ({langs}) => {
    const [language, setLanguage] = useState(langs[0]);

    const apiKey = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';

    return (
        <Dropdown options={langs} selected={language} onSelectedChange={setLanguage} heading="Wybierz język:">Bla bla translate!</Dropdown>
    )
}

export default Translate;