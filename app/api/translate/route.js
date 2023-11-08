import { NextResponse } from "next/server";
const translate = require('translate-google')

export async function POST(req) {
    try {
        const payload = await req.json()
        const { text, to } = payload

        const translatedText = await translate(text, { to })
        if (!translatedText) {
            return NextResponse.json({ message: "Something went wrong", success: false }, { status: 500 })
        }

        return NextResponse.json({ message: translatedText, success: true }, { status: 200 })

    } catch (error) {
        return NextResponse.json({ message: "Something went wrong", success: false }, { status: 500 })
    }
}

export async function GET(req, res) {
    try {
        const targetLanguage = ["en", "it", "es", "de"]
        const translation = await translate(textToTranslate, { to: targetLanguage });

        return NextResponse.json({
            message: "Translation successful",
            input_text: textToTranslate,
            translated_text: translation.text,
            detected_source_language: translation.from.language.iso,
            target_language: targetLanguage, success: true
        }, { status: 200 })

    } catch (error) {
        return NextResponse.json({ message: "Something went wrong", success: false }, { status: 500 })
    }
}