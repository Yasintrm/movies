import React, { PropsWithChildren, Children } from "react";
import "./Tab.css";

function findChildsWithDisplayName(children: React.ReactNode, name: string) {
    const childs = Children.toArray(children);
    return childs?.
        filter(
            it => it instanceof Object
                && "type" in it && it.type instanceof Object
                && "displayName" in it.type
                && typeof it.type.displayName === "string"
                && it.type.displayName === name);
}


export const Tab = (props: PropsWithChildren & { selectedTab: string; }) => {
    const items = findChildsWithDisplayName(props.children, "Tab.Item");
    const itemsArr = items?.map((it: any) => {
        const value = it.props.value;
        const title = findChildsWithDisplayName(it.props.children, "Tab.Item.Title") || <div>invalid title</div>;
        const body = findChildsWithDisplayName(it.props.children, "Tab.Item.Body") || <div>invalid body</div>;

        return { value, title, body, props: it.props };
    });


    return <div className="y-tabs">

        <div className="y-tabs__header">
            {
                itemsArr?.map((it, index) =>
                    <div
                        key={"tab__header__" + index}
                        className={`y-tabs__header__item${props.selectedTab === it.value ? ' selected' : ''}`} onClick={it.props.onClick}>
                        {it.title}
                    </div>)
            }
        </div>

        <div className="y-tabs__body">
            {
                itemsArr?.map((it, index) =>
                    <div
                        key={"tab__body__" + index}
                        className="y-tabs__body__item">
                        {props.selectedTab === it.value && it.body}
                    </div>)
            }
        </div>


    </div>
};


type TabItemProps = {
    value: string;
    onClick?: () => void;
}

const TabItem = (props: PropsWithChildren<TabItemProps>) => {
    return (
        <div className="y-tab-item">
            {props.children}
        </div>
    )
};

const TabItemTitle = (props: PropsWithChildren) => {
    return (
        <div className="y-tab_item_title">
            {props.children}
        </div>
    )
};



const TabItemBody = (props: PropsWithChildren) => {
    return (
        <div className="y-tab_item_body">
            {props.children}
        </div>
    )
};


Tab.displayName = "Tab";
TabItem.displayName = "Tab.Item";
TabItemBody.displayName = "Tab.Item.Body";
TabItemTitle.displayName = "Tab.Item.Title";

TabItem.Title = TabItemTitle;
TabItem.Body = TabItemBody;
Tab.Item = TabItem;