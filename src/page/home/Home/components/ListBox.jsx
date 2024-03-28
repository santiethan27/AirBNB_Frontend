import { faCheck, faChevronDown } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Listbox } from '@headlessui/react'
import React, { useState } from 'react'

const ListBox = () => {
    const [option, setOption] = useState();

    const options = [
        { id: 1, name: 'FINCAS' },
        { id: 2, name: 'CASAS' },
        { id: 3, name: 'Hoteles' },
    ];
    return (
        <Listbox value={option} onChange={setOption}>
            <Listbox.Button className='selector' >{option ? option.name : 'CATEGORIA'} <FontAwesomeIcon icon={faChevronDown} /></Listbox.Button>
            <Listbox.Options className='options-selector'>
                {options.map((opt) => (
                    <Listbox.Option key={opt.id} value={opt}>
                        {opt.name} {option && option.id === opt.id && <FontAwesomeIcon icon={faCheck} />}
                    </Listbox.Option>
                ))}
            </Listbox.Options>
        </Listbox>
    )
}

export default ListBox
