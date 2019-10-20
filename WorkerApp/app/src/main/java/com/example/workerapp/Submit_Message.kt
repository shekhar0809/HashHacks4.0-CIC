package com.example.workerapp

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import kotlinx.android.synthetic.main.message_submit.*

class Submit_Message : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.message_submit)

        val bundle: Bundle? = intent.extras
        val msg = bundle!!.getString("otp_generated")

        textView5.text = msg + " : Give this OTP to the user."

        return_home.setOnClickListener(){
            val intent = Intent(this, MainActivity::class.java)
            startActivity(intent)
        }

    }
}