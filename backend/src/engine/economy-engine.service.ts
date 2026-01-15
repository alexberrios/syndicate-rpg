import { Injectable } from '@nestjs/common';

@Injectable()
export class EconomyEngineService {
  adjustPrices(basePrice: number, worldInflation: number) {
    const multiplier = 1 + worldInflation;
    return Math.max(1, Math.round(basePrice * multiplier));
  }

  rollLoot(worldDay: number) {
    if (worldDay % 7 === 0) {
      return ['reliquia_antigua', 'moneda_rara'];
    }
    return ['chatarra', 'suministros'];
  }
}
