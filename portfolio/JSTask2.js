let quotesList = document.querySelectorAll('.quotes__list-item');
let originalList = [];
let spinner = document.querySelector('.quotes__spinner');
getQuotesRandom();
spinner.addEventListener("change", getQuotesFromAuthor);

          async function getQuotesRandom() {
          let quotesFetched = await fetch("https://programming-quotesapi.vercel.app/api/bulk")
          .then((response) => response.json())
          .then((quote) => {return quote;});
          let optionFirst = document.createElement('option');
          spinner.innerHTML = '';
          optionFirst.text = optionFirst.value = "Случайные авторы";
          spinner.appendChild(optionFirst);
          originalList = [];
          quotesList.forEach((element, index) => { 
            element.textContent = quotesFetched[index].quote + " - " + quotesFetched[index].author; element.style.visibility ="visible";
            var option = document.createElement('option');
            originalList.push(quotesFetched[index]);
            option.text = option.value = quotesFetched[index].author;
            spinner.appendChild(option);
          });
        }

        async function getQuotesFromAuthor() {
          if (spinner.value == "Случайные авторы") {
            quotesList.forEach((element, index) => {
              element.textContent = originalList[index].quote + " - " + originalList[index].author;
              element.style.visibility ="visible";  
            })
          }
          else {
            let fetchURL = "https://programming-quotesapi.vercel.app/api/bulk?author=" + spinner.value;
            let authorQuotesFetched = await fetch(fetchURL)
          .then((response) => response.json())
          .then((quote) => {return quote;});
           quotesList.forEach((element, index) => 
             {
                 if (authorQuotesFetched[index] != undefined) {element.textContent = authorQuotesFetched[index].quote + " - " + authorQuotesFetched[index].author; element.style.visibility ="visible"; }
                 else element.style.visibility ="hidden";
             }); }
      }

          


