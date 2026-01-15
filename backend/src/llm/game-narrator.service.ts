import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

@Injectable()
export class GameNarratorService {
  private readonly client: OpenAI | null;

  constructor() {
    const apiKey = process.env.OPENAI_API_KEY;
    this.client = apiKey ? new OpenAI({ apiKey }) : null;
  }

  async narrate(payload: {
    world: Record<string, any>;
    character: Record<string, any>;
    action: Record<string, any>;
  }) {
    if (!this.client) {
      return {
        narrative:
          'El mundo permanece en silencio; el sistema de narración está desconectado.',
        effects: {},
      };
    }

    const response = await this.client.chat.completions.create({
      model: process.env.OPENAI_MODEL ?? 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content:
            'Eres el narrador de Syndicate RPG Online. Responde en español con una narración breve y efectos mecánicos en JSON.',
        },
        {
          role: 'user',
          content: JSON.stringify(payload),
        },
      ],
      response_format: { type: 'json_object' },
      temperature: 0.7,
    });

    const content = response.choices[0]?.message?.content ?? '{}';
    try {
      return JSON.parse(content);
    } catch {
      return { narrative: content, effects: {} };
    }
  }
}
