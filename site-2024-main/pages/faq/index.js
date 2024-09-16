import { Fragment } from 'react';
import React, { useState } from 'react';
import Content from "@/content";
import Faqs from "layouts/FAQs/index.js";



export default function FaqPage() {
    return (
        <div className="flex flex-col">
            <Content>
                <h2 className="text-2xl md:text-3xl font-bold mb-8 font-heading">
                    Frequently Asked Questions (FAQs)
                </h2>
                <Faqs />
            </Content>
        </div>
    );
}