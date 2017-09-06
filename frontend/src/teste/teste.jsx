import { Classes, Intent, Switch, Tag } from "@blueprintjs/core";
import * as classNames from "classnames";
import * as moment from "moment";
import * as React from "react";


import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

import { DatePicker } from '@blueprintjs/datetime';
import { DateInput } from "@blueprintjs/datetime";


class Teste extends React.Component {
    render() { 
        return (
            <div>
                <ContentHeader title='Ciclos de Pagamentos' small='Cadastro' />
                <Content>
                <DatePicker 
                className={Classes.ELEVATION_1}
            />

            <DateInput  />
                </Content>
            </div>
        )
    }
}

export default Teste