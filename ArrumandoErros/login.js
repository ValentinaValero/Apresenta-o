<script>
        //comentarios do tema escuro java script //
        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = document.getElementById('themeIcon');
        const body = document.body;
    
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark');
    
            if (body.classList.contains('dark')) {
                themeIcon.src = "https://cdn-icons-png.flaticon.com/128/535/535193.png";
                themeIcon.alt = "Lua";
            } else {
                themeIcon.src = "https://cdn-icons-png.flaticon.com/128/829/829117.png";
                themeIcon.alt = "Sol";
            }
        });
    </script>