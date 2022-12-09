<template>
    <!-- program with erik on you tube -->
     <section class="flex text-3xl font-bold justify-center  text-[#141416]">
        <!-- <div class="days mr-2 relative">
            {{displayDays}}
        <div class="label text-sm absolute -bottom-5">days</div>
        </div> -->

        <!-- <span class="leading-snug">:</span> -->
        <div class="hours mx-2 flex-col justify-center ">
            {{displayHours}}
            <div class="label text-[#777E91] font-medium text-sm  -bottom-5">hrs</div>
        </div>

        <!-- <span class="leading-snug">:</span> -->
        <div class="minutes mx-2 flex-col justify-center">
            {{displayMinutes}}
            <div class="label text-[#777E91] font-medium  text-sm  -bottom-5">mins</div>
        </div>

        <!-- <span class="leading-snug">:</span> -->
        <div class="seconds ml-2 flex-col justify-center">
            {{displaySeconds}}
            <div class="label text-[#777E91] font-medium  text-sm  -bottom-5">secs</div>
        </div>
     </section>
</template>

<script>
export default {
    props: ['year', 'month', 'date', 'hour', 'minute', 'second', 'millisecond'],
    data: () => ({
        displayDays: 0,
        displayHours: 0,
        displayMinutes: 0,
        displaySeconds: 0,
    }),
    computed: {
        _seconds: () => 1000,
        _minutes (){
            return this._seconds * 60;
        },
        _hours() {
            return this._minutes * 60;
        },
        _days() {
            return this._hours * 24;
        },
        
    },
    mounted() {
        this.showRemaining();
    },
    methods: {
        formatNum: num => (num < 10 ? '0' + num : num),

        showRemaining() {
            const timer = setInterval(() => {
                const now = new Date();
                const end = new Date( 2021, 40, 22, 10, 10, 10,10);
                const distance = end.getTime() - now.getTime();

                if (distance < 0) {
                    clearInterval(timer);
                    return;
                }

                const days = Math.floor(distance / this._days);
                 const hours = Math.floor((distance % this._days) / this._hours);
                const minutes = Math.floor((distance % this._hours) / this._minutes);
                const seconds = Math.floor((distance % this._minutes) / this._seconds);
                this.displayMinutes = this.formatNum(minutes);
                this.displaySeconds = this.formatNum(seconds);
                this.displayHours = this.formatNum(hours);
                this.displayDays = this.formatNum(days);         
                 }, 1000);
        }
    }
};
</script>

<style>

</style>