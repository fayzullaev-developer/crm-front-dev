<script setup>
</script>

<template>

    <div class="container-fluid p-0">
        <div class="row g-0">
            <div class="col mx-4">
                <div class="row g-2 justify-content-between">
                    <div class="col search me-1 mb-1">
                        <img src="" alt="">
                        <input type="text" class="w-100 align-middle" placeholder="Test" />
                    </div>
                    <div class="col search me-1 mb-1">
                        <img src="" alt="">
                        <input type="text" class="align-middle" placeholder="Test" />
                    </div>
                    <div class="col search me-1 mb-1">
                        <img src="" alt="">
                        <input type="text" class="align-middle" placeholder="Test" />
                    </div>
                    <div class="col search me-1 mb-1">
                        <img src="" alt="">
                        <input type="text" class="align-middle" placeholder="Test" />
                    </div>
                </div>
            </div>
        </div>
    </div>



<div class="row g-3"> <!-- g-3: maydonlar orasidagi masofa (gutter) -->
        
    <!-- Har bir ustun: Mobil qurilmada 12 (100%), Planshet/PCda 6 (50%) -->
    <div class="col-12 col-md-6">
        <div class="d-flex align-items-center border rounded-pill px-3 py-2 bg-white search-box">
            <img src="https://flaticon.com" width="18" height="18" alt="search">
            <input type="text" class="form-control border-0 bg-transparent ms-2" placeholder="Izlash 1...">
        </div>
    </div>

    <div class="col-12 col-md-6">
        <div class="d-flex align-items-center border rounded-pill px-3 py-2 bg-white search-box">
            <img src="https://flaticon.com" width="18" height="18" alt="search">
            <input type="text" class="form-control border-0 bg-transparent ms-2" placeholder="Izlash 2...">
        </div>
    </div>

    <div class="col-12 col-md-6">
        <div class="d-flex align-items-center border rounded-pill px-3 py-2 bg-white search-box">
            <img src="https://flaticon.com" width="18" height="18" alt="search">
            <input type="text" class="form-control border-0 bg-transparent ms-2" placeholder="Izlash 3...">
        </div>
    </div>

    <div class="col-12 col-md-6">
        <div class="d-flex align-items-center border rounded-pill px-3 py-2 bg-white search-box">
            <img src="https://flaticon.com" width="18" height="18" alt="search">
            <input type="text" class="form-control border-0 bg-transparent ms-2" placeholder="Izlash 4...">
        </div>
    </div>

</div>

    
</template>

<style scoped>
/* Fokus effekti */
    .search-box {
        transition: all 0.3s ease;
    }
    .search-box:focus-within {
        border-color: #0d6efd !important;
        box-shadow: 0 0 10px rgba(13, 110, 253, 0.15);
        background-color: #f8f9fa !important;
    }
    .search-box input:focus {
        box-shadow: none;
        outline: none;
    }
</style>