(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{707:function(e,t,a){"use strict";a.r(t);var n=a(1),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("blockquote",[a("p",[e._v('L. Sehovac and K. Grolinger, "Deep Learning for Load Forecasting: Sequence to Sequence Recurrent Neural Networks With Attention," in IEEE Access, vol. 8, pp. 36411-36426, 2020, doi: 10.1109/ACCESS.2020.2975738.')])]),e._v(" "),a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),a("p",[a("strong",[e._v("Electrical load forecasting")]),e._v(" is essential as it supports energy production planning and scheduling, assists with budgeting, and helps identify saving opportunities.\nThis paper proposes "),a("strong",[e._v("Sequence to Sequence Recurrent Neural Network (S2S RNN) with Attention")]),e._v(" for electrical load forecasting.\nThe S2S architecture from language translation is adapted for load forecasting and a corresponding sample generation approach is designed.\nRNN enables capturing time dependencies present in the load data and S2S model further improves time modeling by combining two RNNs: encoder and decoder.\nThe Attention mechanism alleviates the burden of connecting encoder and decoder.")]),e._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),a("p",[e._v("Load forecasting has been attracting research and industry attention because of its importance for energy production planning and scheduling.\nThe rapid increase of smart meter(智慧仪表) use has created opportunities for load forecasting.\nEnergy consumption data from smart meters is used to build models capable of inferring future energy consumption, thus facilitating cost-effective decision-making.")]),e._v(" "),a("h2",{attrs:{id:"methods-for-load-forecasting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods-for-load-forecasting"}},[e._v("#")]),e._v(" Methods for load forecasting")]),e._v(" "),a("p",[e._v("Load forecasting can be classified into three main categories: short, medium, and long-term.\nThere are many approaches to load forecasting, including physics, statistics, and machine learning-based. This paper focuses on machine learning-based models.")]),e._v(" "),a("h2",{attrs:{id:"ml-models-for-load-forecasting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ml-models-for-load-forecasting"}},[e._v("#")]),e._v(" ML models for load forecasting")]),e._v(" "),a("ul",[a("li",[e._v("Feedfoward Neural Networks(FFNNs)")]),e._v(" "),a("li",[e._v("Support Vector Regression(SVR)")]),e._v(" "),a("li",[e._v("Recurrent Neural Networks(RNNs)")])]),e._v(" "),a("p",[e._v("RNN have an advantage over DNNs in analyzing the temporal dynamic behavior, in language translation a "),a("strong",[e._v("Sequence-to-Sequence(S2S) RNN")]),e._v(" which combines an encoder RNN and decoder RNN has shown a greater success.")]),e._v(" "),a("h3",{attrs:{id:"s2s-rnn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#s2s-rnn"}},[e._v("#")]),e._v(" S2S RNN")]),e._v(" "),a("p",[e._v("RNNs  are good at modeling temporal behaviors found in time series data. RNNs take a sequence of inputs "),a("img",{attrs:{src:"https://cdn.nlark.com/yuque/__latex/fdf8c4b58388f9b1ddf57b8b15cc6410.svg#card=math&code=x_{[1]}%2C\\dots%2Cx_{[T]}&id=Ko0lk",alt:"",loading:"lazy"}}),e._v(", and previous hidden states, to compute a sequence of outputs "),a("img",{attrs:{src:"https://cdn.nlark.com/yuque/__latex/b93770825595e0a3af24b3afbf1f361c.svg#card=math&code=y_{[1]}%2C\\dots%2Cy_{[T]}&id=o9upy",alt:"",loading:"lazy"}}),e._v(".\n"),a("strong",[e._v("Vanilla RNNs")]),e._v(" are mainly trained using back-propagation through time(BPTT), which can lead to the vanishing gradient problem for long sequences. Long-short-term memory(LSTM) networks  were designed to overcome this problem.\n**LSTM **networks are capable of storing information for longer periods of time and the model can make better predicitons.\nThe "),a("strong",[e._v("Gated Recurrent Unit(GRU)")]),e._v(" was introduced to simplify the LSTM model. As GRUs have fewer parameters, convergence is achieved faster than with LSTMs.\n"),a("strong",[e._v("Sequence to Sequence (S2S or Seq2seq) RNNs")]),e._v(" consist of an encoder and decoder RNN.")]),e._v(" "),a("h3",{attrs:{id:"attention-mechanism-for-s2s"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#attention-mechanism-for-s2s"}},[e._v("#")]),e._v(" Attention Mechanism for S2S")]),e._v(" "),a("p",[e._v("In S2S model, the encoder is burdened with compressing all necessary information into a fixed-length vector. It was addressed by attention mechanism in language translation.\nAttention mechanism allows the decoder to look back at the encoder outputs to find the most relevant information.")]),e._v(" "),a("h2",{attrs:{id:"methodology"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methodology"}},[e._v("#")]),e._v(" Methodology")]),e._v(" "),a("h3",{attrs:{id:"pre-processing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pre-processing"}},[e._v("#")]),e._v(" Pre-processing")]),e._v(" "),a("p",[e._v("Dataset contains nine futures: months, day of year, day of month, weekday, weekend, holiday, hour, season, and energy usage. The dataset was divided into a training set(80%) and a test set(20%)。\nThe value of each future in the data were transformed to have zero-mean and unit-variance.")]),e._v(" "),a("h3",{attrs:{id:"sample-generation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sample-generation"}},[e._v("#")]),e._v(" Sample generation")]),e._v(" "),a("h3",{attrs:{id:"s2s-prediction-with-bahdanau-attention"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#s2s-prediction-with-bahdanau-attention"}},[e._v("#")]),e._v(" S2S Prediction with Bahdanau Attention")]),e._v(" "),a("h3",{attrs:{id:"s2s-prediction-with-luong-attention"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#s2s-prediction-with-luong-attention"}},[e._v("#")]),e._v(" S2S Prediction with Luong Attention")]),e._v(" "),a("h2",{attrs:{id:"experiments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#experiments"}},[e._v("#")]),e._v(" Experiments")]),e._v(" "),a("p",[e._v("1、The proposed approach was evaluated on a real-world dataset from a commercial building provided by an industry partner. The dataset contained one year and three months of energy load data in five minute intervals.")]),e._v(" "),a("p",[e._v("2、All S2S models were tested for four different prediction lengths "),a("img",{attrs:{src:"https://cdn.nlark.com/yuque/__latex/6cb78cc5fb5f9fbb03c8a72c2a470201.svg#card=math&code=N%3D[12%2C48%2C120%2C288]&id=zU9wX",alt:"",loading:"lazy"}}),e._v(".")]),e._v(" "),a("p",[e._v("3、Four inputs cases with different input lengths"),a("img",{attrs:{src:"https://cdn.nlark.com/yuque/__latex/40b1d3b0db269d160b805c7957e8a83a.svg#card=math&code=T%3D[12%2C48%2C120%2C288]&id=ZhTEV",alt:"",loading:"lazy"}}),e._v("were chosen for experiments.")]),e._v(" "),a("p",[e._v("4、The four input cases with four prediction lengths, makes a total of 16 cases considered.")]),e._v(" "),a("p",[e._v("5、With each of the 16 cases, 24 different models were evaluated:")]),e._v(" "),a("ul",[a("li",[e._v("S2S-o model with GRU/LSTM/RNN cells (3 models)")]),e._v(" "),a("li",[e._v("S2S-BA model with GRU/LSTM/RNN cells (3 models)")]),e._v(" "),a("li",[e._v("S2S-LA model with GRU/LSTM/RNN cells, accompanied with each cell is one of three attention score function: dot, general, concat (9 models)")]),e._v(" "),a("li",[e._v("Non-S2S RNN, one layer with GRU/LSTM/RNN cell (3 models)")]),e._v(" "),a("li",[e._v("Non-S2S RNN, three layers with GRU/LSTM/RNN cell (3 models)")]),e._v(" "),a("li",[e._v("DNN model with sizes: small, medium, and large (3 models)")])]),e._v(" "),a("p",[e._v("6、The accuracy measures used throughout this work are the Mean Absolute Error("),a("strong",[e._v("MAE")]),e._v(") and Mean Absolute Percentage Error("),a("strong",[e._v("MAPE")]),e._v(").")]),e._v(" "),a("h2",{attrs:{id:"results-and-discussion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#results-and-discussion"}},[e._v("#")]),e._v(" Results and Discussion")]),e._v(" "),a("p",[e._v("1、The prediction length "),a("img",{attrs:{src:"https://cdn.nlark.com/yuque/__latex/459f3c80a50b7be28751b0869ef5386a.svg#card=math&code=N&id=LJvzI",alt:"",loading:"lazy"}}),e._v("increases, the accuracy decreases.\n2、S2S-BA model was the dominant(占优势的) model.\n3、The one layer Non-S2S outperformed the three layer Non-S2S model what demonstrated that additional layers did not improve the forecasting accuracy.\n4、All S2S models performed better than one layer Non-S2S models.\n5、The attention models contain more paremeters than other models.\n6、The S2S-o model achives comparable results to all attention-based models for each prediction length while being faster to train because of having fewer parameters.\n7、The S2S-BA model is prefered for high accuracy irrelevant of training speed.\n8、The S2S-o model is prefered for slight decrease in accuracy and reduction in training speed.\n9、The S2S-BA model with GRU is not showing signs of overfitting. While NNs with a large number of weights such as S2S with attention are prone to overfitting.")])])}),[],!1,null,null,null);t.default=o.exports}}]);