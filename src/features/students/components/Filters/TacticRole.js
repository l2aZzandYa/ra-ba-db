const TacticRole = (props) => {
    return (
        <div className='tactic-roles'>
            <div className='label'>Role</div>
            <div className='control'>
                <input type='checkbox'
                    onChange={(e) => props.set('role', e.target.checked ? e.target.value : null)}
                    checked={props.get('role') === 'tanker'}
                    id='tanker-role-filter'
                    value='tanker' />
                <label for='tanker-role-filter'>Tank</label>
            </div>
            <div className='control'>
                <input type='checkbox'
                    onChange={(e) => props.set('role', e.target.checked ? e.target.value : null)}
                    checked={props.get('role') === 'damagedealer'}
                    id='dealer-role-filter'
                    value='damagedealer' />
                <label for='dealer-role-filter'>Dealer</label>
            </div>
            <div className='control'>
                <input type='checkbox'
                    onChange={(e) => props.set('role', e.target.checked ? e.target.value : null)}
                    checked={props.get('role') === 'healer'}
                    id='healer-role-filter'
                    value='healer' />
                <label for='healer-role-filter'>Healer</label>
            </div>
            <div className='control'>
                <input type='checkbox'
                    onChange={(e) => props.set('role', e.target.checked ? e.target.value : null)}
                    checked={props.get('role') === 'support'}
                    id='support-role-filter'
                    value='support' />
                <label for='support-role-filter'>Support</label>
            </div>
            <div className='control'>
                <input type='checkbox'
                    onChange={(e) => props.set('role', e.target.checked ? e.target.value : null)}
                    checked={props.get('role') === 'vehicle'}
                    id='vehicle-role-filter'
                    value='vehicle' />
                <label for='vehicle-role-filter'>T.S.</label>
            </div>
        </div>
    )
}

export default TacticRole;