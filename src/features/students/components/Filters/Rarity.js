const Rarity = (props) => {
    return (
        <div className='rarity'>
            <div className='label'>Rarity</div>
            <div className='control'>
                <input type='checkbox'
                    onChange={(e) => props.set('rarity', e.target.checked ? e.target.value : null)}
                    checked={props.get('rarity') === '1'}
                    id='one-star-rarity-filter'
                    value='1' />
                <label for='one-star-rarity-filter'>
                    <img src={`../images/ui/Common_Icon_Formation_Star.png`}
                        width='22' height='22'
                        alt={`Star Grade`} />
                </label>
            </div>
            <div className='control'>
                <input type='checkbox'
                    onChange={(e) => props.set('rarity', e.target.checked ? e.target.value : null)}
                    checked={props.get('rarity') === '2'}
                    id='two-star-rarity-filter'
                    value='2' />
                <label for='two-star-rarity-filter'>
                    {[...Array(2)].map((i) => {
                        return (
                            <img src={`../images/ui/Common_Icon_Formation_Star.png`}
                                width='22' height='22'
                                alt={`Star Grade`} />
                        );
                    })}
                </label>
            </div>
            <div className='control'>
                <input type='checkbox'
                    onChange={(e) => props.set('rarity', e.target.checked ? e.target.value : null)}
                    checked={props.get('rarity') === '3'}
                    id='three-star-rarity-filter'
                    value='3' />
                <label for='three-star-rarity-filter'>
                    {[...Array(3)].map((i) => {
                        return (
                            <img src={`../images/ui/Common_Icon_Formation_Star.png`}
                                width='22' height='22'
                                alt={`Star Grade`} />
                        );
                    })}
                </label>
            </div>
            <div className='control'>
                <input type='checkbox'
                    onChange={(e) => props.set('rarity', e.target.checked ? e.target.value : null)}
                    checked={props.get('rarity') === '4'}
                    id='four-star-rarity-filter'
                    value='4' />
                <label for='four-star-rarity-filter'>
                    {[...Array(4)].map((i) => {
                        return (
                            <img src={`../images/ui/Common_Icon_Formation_Star.png`}
                                width='22' height='22'
                                alt={`Star Grade`} />
                        );
                    })}
                </label>
            </div>
            <div className='control'>
                <input type='checkbox'
                    onChange={(e) => props.set('rarity', e.target.checked ? e.target.value : null)}
                    checked={props.get('rarity') === '5'}
                    id='five-star-rarity-filter'
                    value='5' />
                <label for='five-star-rarity-filter'>
                    {[...Array(5)].map((i) => {
                        return (
                            <img src={`../images/ui/Common_Icon_Formation_Star.png`}
                                width='22' height='22'
                                alt={`Star Grade`} />
                        );
                    })}
                </label>
            </div>
            <div className='control'>
                <input type='checkbox'
                    onChange={(e) => props.set('rarity', e.target.checked ? e.target.value : null)}
                    checked={props.get('rarity') === '6'}
                    id='six-star-rarity-filter'
                    value='6' />
                <label for='six-star-rarity-filter'>
                    {[...Array(5)].map((i) => {
                        return (
                            <img src={`../images/ui/Common_Icon_Formation_Star.png`}
                                width='22' height='22'
                                alt={`Star Grade`} />
                        );
                    })}
                    {[...Array(1)].map((i) => {
                        return (
                            <img src={`../images/ui/Common_Icon_Formation_Star_2.png`}
                                width='22' height='22'
                                alt={`UE Star Grade`} />
                        );
                    })}
                </label>
            </div>
            <div className='control'>
                <input type='checkbox'
                    onChange={(e) => props.set('rarity', e.target.checked ? e.target.value : null)}
                    checked={props.get('rarity') === '7'}
                    id='seven-star-rarity-filter'
                    value='7' />
                <label for='seven-star-rarity-filter'>
                    {[...Array(5)].map((i) => {
                        return (
                            <img src={`../images/ui/Common_Icon_Formation_Star.png`}
                                width='22' height='22'
                                alt={`Star Grade`} />
                        );
                    })}
                    {[...Array(2)].map((i) => {
                        return (
                            <img src={`../images/ui/Common_Icon_Formation_Star_2.png`}
                                width='22' height='22'
                                alt={`UE Star Grade`} />
                        );
                    })}
                </label>
            </div>
            <div className='control'>
                <input type='checkbox'
                    onChange={(e) => props.set('rarity', e.target.checked ? e.target.value : null)}
                    checked={props.get('rarity') === '8'}
                    id='eight-star-rarity-filter'
                    value='8' />
                <label for='eight-star-rarity-filter'>
                    {[...Array(5)].map((i) => {
                        return (
                            <img src={`../images/ui/Common_Icon_Formation_Star.png`}
                                width='22' height='22'
                                alt={`Star Grade`} />
                        );
                    })}
                    {[...Array(3)].map((i) => {
                        return (
                            <img src={`../images/ui/Common_Icon_Formation_Star_2.png`}
                                width='22' height='22'
                                alt={`UE Star Grade`} />
                        );
                    })}
                </label>
            </div>
        </div>
    )
}

export default Rarity;