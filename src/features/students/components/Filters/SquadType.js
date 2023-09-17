const Type = (props) => {
    return (
        <div className='squad-types'>
            <div className='label'>Squad Type</div>
            <div className='control'>
                <input type='checkbox'
                    onChange={(e) => props.set('type', e.target.checked ? e.target.value : null)}
                    checked={props.get('type') === 'main'}
                    id='striker-type-filter'
                    value='main' />
                <label for='striker-type-filter'>Striker</label>
            </div>
            <div className='control'>
                <input type='checkbox'
                    onChange={(e) => props.set('type', e.target.checked ? e.target.value : null)}
                    checked={props.get('type') === 'support'}
                    id='special-type-filter'
                    value='support' />
                <label for='special-type-filter'>Special</label>
            </div>
        </div>
    )
}

export default Type;