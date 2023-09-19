import Switch from 'rc-switch';

const Owned = (props) => {
    return (
        <div className='owned'>
            <div className='label'>Owned</div>
            <div className='control'>
                <Switch className="owned-filter"
                    checked={props.get('owned')}
                    onChange={(value) => props.set('owned', value)} />
            </div>
        </div>
    )
}

export default Owned;