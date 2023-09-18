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
                    <img src={`../images/ui/Common_Icon_Formation_Star_R1.png`}
                        width='22' height='22'
                        alt={`Star 1`} />
                </label>
            </div>
            <div className='control'>
                <input type='checkbox'
                    onChange={(e) => props.set('rarity', e.target.checked ? e.target.value : null)}
                    checked={props.get('rarity') === '2'}
                    id='two-star-rarity-filter'
                    value='2' />
                <label for='two-star-rarity-filter'>
                    <img src={`../images/ui/Common_Icon_Formation_Star_R2.png`}
                        width='22' height='22'
                        alt={`Star 2`} />
                </label>
            </div>
            <div className='control'>
                <input type='checkbox'
                    onChange={(e) => props.set('rarity', e.target.checked ? e.target.value : null)}
                    checked={props.get('rarity') === '3'}
                    id='three-star-rarity-filter'
                    value='3' />
                <label for='three-star-rarity-filter'>
                    <img src={`../images/ui/Common_Icon_Formation_Star_R3.png`}
                        width='22' height='22'
                        alt={`Star 3`} />
                </label>
            </div>
        </div>
    )
}

export default Rarity;