<template>
  <v-container>
    <v-card>
      <v-card-title x-large class="justify-center">Uberpet</v-card-title>
      <v-card-actions class="justify-center">
        <v-form>
          <v-row class="justify-center">
            <v-col cols="12" md="6">
              <v-text-field
                v-model="gasPrice"
                label="Preço da gasolina (1 litro em R$)"
                outlined
                required
                @change="recalc"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="distance"
                outlined
                label="Distância de ida e volta (km)"
                required
                @change="recalc"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="carCost"
                outlined
                label="Kilometragem do carro (Km / Litro)"
                required
                @change="recalc"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="time"
                outlined
                label="Tempo médio do trajeto (Minutos)"
                required
                @change="recalc"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="profit"
                outlined
                label="Lucro por hora (R$)"
                required
                @change="recalc"
              >
              </v-text-field>
            </v-col>
          </v-row>

          <v-row class="justify-center">
            <v-col cols="12" md="6">
              <v-text-field
                v-model="total"
                v-currency
                outlined
                readonly
                label="Valor da corrida (R$)"
                required
              >
              </v-text-field>
            </v-col>
          </v-row>
        </v-form>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      total: 0,
      gasPrice: 7,
      distance: 10,
      time: 30,
      carCost: 14,
      profit: 40,
    }
  },
  mounted() {
    this.recalc()
  },
  methods: {
    recalc() {
      this.total =
        this.gasPrice * (this.distance / this.carCost) +
        (this.time / 60) * this.profit
    },
  },
}
</script>
