const DefenseType = (props) => {
    return (
        <div className='defense-types'>
            <div className='label'>Defense Type</div>
            <div className='control'>
                <input type='checkbox'
                    onChange={(e) => props.set('defenseType', e.target.checked ? e.target.value : null)}
                    checked={props.get('defenseType') === 'LightArmor'}
                    id='light-defense-type-filter'
                    value='LightArmor' />
                <label for='light-defense-type-filter'>Light</label>
            </div>
            <div className='control'>
                <input type='checkbox'
                    onChange={(e) => props.set('defenseType', e.target.checked ? e.target.value : null)}
                    checked={props.get('defenseType') === 'HeavyArmor'}
                    id='heavy-defense-type-filter'
                    value='HeavyArmor' />
                <label for='heavy-defense-type-filter'>Heavy</label>
            </div>
            <div className='control'>
                <input type='checkbox'
                    onChange={(e) => props.set('defenseType', e.target.checked ? e.target.value : null)}
                    checked={props.get('defenseType') === 'Unarmed'}
                    id='speacial-defense-type-filter'
                    value='Unarmed' />
                <label for='speacial-defense-type-filter'>Speacial</label>
            </div>
            <div className='control'>
                <input type='checkbox'
                    onChange={(e) => props.set('defenseType', e.target.checked ? e.target.value : null)}
                    checked={props.get('defenseType') === 'ElasticArmor'}
                    id='elastic-defense-type-filter'
                    value='ElasticArmor' />
                <label for='elastic-defense-type-filter'>Elastic</label>
            </div>
        </div>
    )
}

export default DefenseType;