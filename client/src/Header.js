import React from 'react';
import Dropdown from './Dropdown.js';
import Logo from './Logo.js';

function Header ({
    user,
    tokens,
    contracts,
    selectToken
}) {
    return(
        <header id="header" className="card">
            <div className="row">
                <div className="col-sm-1">
                    <Logo/>
                </div>
                <div className="col-sm-3 flex">
                    <Dropdown
                        items={tokens.map(token => ({
                            label: token.ticker,
                            value: token
                        }))}

                        activeItem={{
                            label: user.selectedToken.ticker,
                            value: user.selectedToken
                        }}
                        onSelect={selectToken}
                    />
                </div>
                <div className="col-sm-4">
                    <h1 className="header-title">
                        Dex - <span className="contract-address">Contract Adress: <span className="address">{contracts.dex.options.address}
                            </span></span>
                    </h1>
                </div>
            </div>
        </header>
    )
}

export default Header;