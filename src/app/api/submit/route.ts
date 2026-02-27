import { NextResponse } from 'next/server'

const APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbwdMwlI0O23wyJCSAHsqzy2sshU2O1pvoutR9JDLR3TpCjIR9r-Y5d4GHjFF1CosklzKA/exec'

export async function POST(request: Request) {
  try {
    const payload = await request.json()

    const response = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    const result = await response.json()

    return NextResponse.json(result)
  } catch (error) {
    console.error('Erro ao enviar para Apps Script:', error)
    return NextResponse.json(
      { success: false, error: 'Erro ao enviar formulário' },
      { status: 500 }
    )
  }
}
