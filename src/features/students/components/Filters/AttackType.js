const AttackType = (props) => {
    return (
        <div className='attack-types'>
            <div className='label'>Attack Type</div>
            <div className='control'>
                <input type='checkbox'
                    onChange={(e) => props.set('attackType', e.target.checked ? e.target.value : null)}
                    checked={props.get('attackType') === 'explosion'}
                    id='explosive-attack-type-filter'
                    value='explosion' />
                <label for='explosive-attack-type-filter'>Explosive</label>
            </div>
            <div className='control'>
                <input type='checkbox'
                    onChange={(e) => props.set('attackType', e.target.checked ? e.target.value : null)}
                    checked={props.get('attackType') === 'pierce'}
                    id='piercing-attack-type-filter'
                    value='pierce' />
                <label for='piercing-attack-type-filter'>Piercing</label>
            </div>
            <div className='control'>
                <input type='checkbox'
                    onChange={(e) => props.set('attackType', e.target.checked ? e.target.value : null)}
                    checked={props.get('attackType') === 'mystic'}
                    id='mystic-attack-type-filter'
                    value='mystic' />
                <label for='mystic-attack-type-filter'>Mystic</label>
            </div>
        </div>
    )
}

export default AttackType;