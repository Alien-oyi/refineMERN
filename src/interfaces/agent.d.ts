import { BaseKey } from '@refinedev/core';
import React from 'react';

export interface AgentCardProp {
    id?: BaseKey | undefined,
    name: string,
    email: string,
    avatar: string,
    noOfProperties: number
}

export interface InfoBarProps {
    icon: React.ReactNode,
    name: string
}
