<template>
    <div class="page-success">
        <div class="columns is-multiline">
            <div class="column is-12">
                <h1 class="title">Gracias</h1>

                <p>Su orden será procesada en menos de 48 horas.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: 'SuccessView',
    mounted(){
        document.title = "Success | Chanito's Industries"
    }
}
</script>